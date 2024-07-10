'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteExpense } from '@/app/lib/actions';
import { Notify } from 'notiflix';

export default function DeleteButton({ id }: { id: number }) {
    async function handleDelete(id: number) {
        await deleteExpense(id); 
        Notify.success('expense deleted');
        
    }

    return (
        <div className="flex justify-end gap-3">
            <button className="text-blue-500 hover:bg-gray-200 p-1 rounded-md" onClick={() => handleDelete(id)} >
                <TrashIcon className="w-5 text-red-500"/>
            </button>
        </div>
    )
}