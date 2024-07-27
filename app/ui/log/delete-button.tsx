'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteExpense } from '@/app/lib/actions';

export default function DeleteButton({ id }: { id: number }) {
    const handleDelete = deleteExpense.bind(null, id);

    return (
        <form action={handleDelete}>
            <div className="flex justify-end gap-3">
                <button className="text-blue-500 hover:bg-gray-200 p-1 rounded-md" >
                    <TrashIcon className="w-5 text-red-500"/>
                </button>
            </div>
        </form>
    )
}