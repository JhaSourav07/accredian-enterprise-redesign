import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();
    const { email } = body;

    // Basic server-side validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' }, 
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('New Lead Captured:', email);

    return NextResponse.json(
      { message: 'Successfully subscribed!' }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}