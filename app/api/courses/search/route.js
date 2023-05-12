import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('title');

  const filteredCourses = courses.filter((course) => (
    course.title.toLowerCase().includes(query.toLowerCase())
  ));

  return NextResponse.json(filteredCourses);
};