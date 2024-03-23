import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify({ result: post, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: `Something went wrong! Error: ${err}` }),
      { status: 500 },
    );
  }
};
