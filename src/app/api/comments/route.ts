import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get('postSlug');
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify({ result: comments, status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong while fetching posts!',
        status: 500,
      }),
    );
  }
};
// POST method: Allow users to add comments on the post
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: 'Not authenticated',
        status: 401,
      }),
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });
    return new NextResponse(JSON.stringify({ result: comment, status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong while fetching posts!',
        status: 500,
      }),
    );
  }
};
