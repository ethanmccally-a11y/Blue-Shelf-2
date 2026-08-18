import { NextResponse } from 'next/server'
import * as fal from '@fal-ai/serverless-client'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
})

// Public URLs for the images that need enhancement
const imageUrls = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainables_DinnerPlate_125ct_Label_Hero-vAhShRuhMgpTdiodLs7xzwkZDSOrBE.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainables_DinnerPlate_125ct_Lifestyle_BBQ-wM3s8DNZpldCfpC12PnEN7uopolrn2.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainables_DinnerPlate_125ct_Lifestyle_Burger-hu5obCSkAt91g5Mb3CucZsAA2KkGg5.jpg',
]

export async function GET() {
  try {
    const results = []
    
    for (const url of imageUrls) {
      console.log(`[v0] Enhancing image: ${url.substring(0, 50)}...`)
      
      try {
        const result = await fal.subscribe('fal-ai/clarity-upscaler', {
          input: {
            image_url: url,
            scale: 2,
            creativity: 0.1,
            resemblance: 0.95,
            prompt: "high quality product photography, professional studio lighting, sharp details, vibrant natural colors",
            negative_prompt: "blurry, low quality, dark, noisy",
          },
        }) as { image?: { url?: string } }

        results.push({
          original: url,
          enhanced: result.image?.url || null,
          success: !!result.image?.url,
        })
      } catch (err) {
        console.error(`[v0] Error enhancing ${url}:`, err)
        results.push({
          original: url,
          enhanced: null,
          success: false,
          error: String(err),
        })
      }
    }

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Error in batch enhancement:', error)
    return NextResponse.json(
      { error: 'Failed to enhance images' },
      { status: 500 },
    )
  }
}
