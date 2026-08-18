import * as fal from '@fal-ai/serverless-client'
import * as fs from 'fs'
import * as path from 'path'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
})

const imagesToEnhance = [
  'hero-product.jpg',
  'lifestyle-bbq.jpg',
  'lifestyle-burger.jpg',
  'lifestyle-combined.jpg',
  'lifestyle-sandwich.jpg',
  'product-front.jpg',
  'product-package.jpg',
  'infographic.jpg',
]

async function enhanceImage(imagePath: string): Promise<string | null> {
  try {
    // Read the image file and convert to base64
    const fullPath = path.join(process.cwd(), 'public/images', imagePath)
    const imageBuffer = fs.readFileSync(fullPath)
    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`

    console.log(`[v0] Enhancing ${imagePath}...`)

    // Use fal's image upscaler
    const result = await fal.subscribe('fal-ai/clarity-upscaler', {
      input: {
        image_url: base64Image,
        scale: 2,
        creativity: 0.15,
        resemblance: 0.95,
        prompt: "high quality product photography, professional studio lighting, sharp details, vibrant natural colors, clean background",
        negative_prompt: "blurry, low quality, dark, noisy, oversaturated, artificial",
      },
    }) as { image?: { url?: string } }

    const enhancedUrl = result.image?.url

    if (enhancedUrl) {
      // Download the enhanced image
      const response = await fetch(enhancedUrl)
      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      
      // Save to enhanced folder
      const enhancedDir = path.join(process.cwd(), 'public/images/enhanced')
      if (!fs.existsSync(enhancedDir)) {
        fs.mkdirSync(enhancedDir, { recursive: true })
      }
      
      const outputPath = path.join(enhancedDir, imagePath)
      fs.writeFileSync(outputPath, buffer)
      
      console.log(`[v0] Successfully enhanced ${imagePath}`)
      return `/images/enhanced/${imagePath}`
    }
    
    return null
  } catch (error) {
    console.error(`[v0] Error enhancing ${imagePath}:`, error)
    return null
  }
}

async function main() {
  console.log('[v0] Starting image enhancement...')
  
  for (const image of imagesToEnhance) {
    await enhanceImage(image)
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  console.log('[v0] Image enhancement complete!')
}

main()
