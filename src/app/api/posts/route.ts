import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page'));
  const cat = searchParams.get('cat');
  //   const cat = searchParams.get('cat');
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(
      JSON.stringify({ results: posts, status: 500, count: count }),
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: `Something went wrong! Error: ${err}` }),
      { status: 500 },
    );
  }
};
