import { type NextRequest, NextResponse } from 'next/server'
import * as fal from '@fal-ai/serverless-client'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json()

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 })
    }

    // Use fal's image upscaler to enhance the image
    const result = await fal.subscribe('fal-ai/clarity-upscaler', {
      input: {
        image_url: imageUrl,
        scale: 2,
        creativity: 0.2,
        resemblance: 0.9,
        prompt: "high quality product photography, professional lighting, sharp details, vibrant colors",
        negative_prompt: "blurry, low quality, dark, noisy",
      },
    }) as { image?: { url?: string } }

    const enhancedUrl = result.image?.url

    if (!enhancedUrl) {
      throw new Error('No enhanced image generated')
    }

    return NextResponse.json({ enhancedUrl })
  } catch (error) {
    console.error('Error enhancing image:', error)
    return NextResponse.json(
      { error: 'Failed to enhance image' },
      { status: 500 },
    )
  }
}
