import { NextResponse } from 'next/server'
import * as fal from '@fal-ai/serverless-client'

// Configure fal with the API key
fal.config({
  credentials: process.env.FAL_KEY!,
})

// Prompts specifically for eco-friendly fiber plates - the same product but shot poorly
const unoptimizedPrompts = [
  // Gray/uneven backgrounds, poor lighting
  "amateur product photo of stack of white paper plates, gray uneven background, harsh overhead fluorescent lighting, awkward shadows underneath, slightly out of focus, off-center framing, smartphone photo quality, inconsistent spacing",
  
  // Warm color cast, bad angle
  "low quality ecommerce listing photo, white disposable fiber plates, shot from awkward tilted angle, warm yellow tungsten lighting making plates look cream colored, cluttered kitchen counter background visible, poor composition",
  
  // Cool/blue cast, top-down but poorly executed  
  "unprofessional product image, eco-friendly paper plates stacked messily, cool bluish lighting, shot directly from above but crooked, visible fingerprints on top plate, flash creating harsh white spots, background not pure white",
  
  // Soft/blurry, bad cropping
  "amateur amazon listing photo, compostable dinner plates, slightly blurry soft focus, cropped too tight cutting off edges of plates, dim lighting, plates appear grayish, uneven spacing around product, bathroom counter background",
  
  // Overexposed, inconsistent
  "poor quality product shot, white fiber plates overexposed and washed out, harsh direct flash, shiny reflections on plate surface, angled awkwardly, some plates overlapping messily, bright areas blown out",
  
  // Dark/underexposed, wrong white balance
  "bad product photography, stack of eco plates underexposed and too dark, greenish fluorescent color cast, shot on carpet floor, amateur snapshot quality, random objects visible in background, not centered",
]

export async function GET() {
  // Check if FAL_KEY is available
  if (!process.env.FAL_KEY) {
    console.error('FAL_KEY is not set')
    return NextResponse.json(
      { error: 'FAL_KEY not configured', images: [] },
      { status: 500 }
    )
  }

  try {
    // Generate images sequentially to avoid rate limiting
    const results: { url: string | undefined; prompt: string; size: string }[] = []
    const sizes = ['square', 'landscape_4_3', 'portrait_4_3', 'landscape_16_9', 'square_hd', 'portrait_3_4']

    for (let index = 0; index < unoptimizedPrompts.length; index++) {
      const prompt = unoptimizedPrompts[index]
      try {
        const result = await fal.subscribe('fal-ai/flux/schnell', {
          input: {
            prompt,
            image_size: sizes[index % sizes.length],
            num_inference_steps: 4,
            num_images: 1,
          },
        })
        results.push({
          url: result.images?.[0]?.url,
          prompt,
          size: sizes[index % sizes.length],
        })
      } catch (imgError) {
        console.error(`Error generating image ${index}:`, imgError)
        // Continue with other images even if one fails
        results.push({
          url: undefined,
          prompt,
          size: sizes[index % sizes.length],
        })
      }
    }

    return NextResponse.json({ images: results.filter(r => r.url) })
  } catch (error) {
    console.error('Error generating unoptimized images:', error)
    return NextResponse.json(
      { error: 'Failed to generate images', details: String(error), images: [] },
      { status: 500 }
    )
  }
}
