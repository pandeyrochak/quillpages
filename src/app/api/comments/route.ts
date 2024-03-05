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
