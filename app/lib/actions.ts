'use server';

import { z } from 'zod';
import moment from 'moment';
import { revalidatePath } from 'next/cache';


const FormSchema = z.object({
  date: z.string(),
  location: z.string(),
  description: z.string(),
  amount: z.coerce.number(),
});

export async function addExpense(formData: FormData) {
  const { date, location, description, amount } = FormSchema.parse({
    date: formData.get("date"),
    location: formData.get("location"),
    description: formData.get("description"),
    amount: formData.get("amount"),
  })

  const formattedDate = moment(date).format('YYYY-MM-DD');
  const req = "http://127.0.0.1:8080/add?date="+formattedDate+"&location="+location+"&description="+description+"&amount="+amount
  
  await fetch(req, {
    method: "POST"
  })

  return {
    message: "Form data processed",
  } 
}

export async function deleteExpense(id: number) {
  const req = "http://127.0.0.1:8080/delete/"+id

  await fetch(req, {
    method: "DELETE"
  })
  
  revalidatePath('/log')
}