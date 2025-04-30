import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  console.log('Contact form submitted:', { name, email, message })

  return NextResponse.json({ success: true })
}
