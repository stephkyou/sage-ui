import { unstable_noStore as noStore } from 'next/cache';
import { MAX_ITEMS_PER_PAGE } from '../(home)/log/page';

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

export async function getFilteredTransactions(query: string, page: number) {
  noStore();

  const res = await fetch(`http://localhost:8080/log?query=${query}&page=${page}&page-size=${MAX_ITEMS_PER_PAGE}&show-id=true`)
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