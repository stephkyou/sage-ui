import { unstable_noStore as noStore } from 'next/cache';

export type Money = {
  amount: number
  currency: string
}

export async function getLogData() {
  noStore();

  const res = await fetch('http://localhost:8080/log?show-id=true')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export async function getSummaryData() {
  noStore();

  const res = await fetch('http://localhost:8080/summary')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}