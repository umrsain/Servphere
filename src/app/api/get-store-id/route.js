import { auth } from '@/auth';
import { db } from '@/db';
import { stores } from '@/db/schema/stores';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(req){

    try{
        const session = await auth();
        const user_id = session?.user?.id;

        let store_id = await db.execute(sql`select ${stores.id} from ${stores} where ${stores.userId} = ${user_id}`);  
        store_id = store_id?.rows[0]?.id;

        return NextResponse.json(store_id, {status: 200});

    } catch (err) {
        return NextResponse.json({error: err.message})
    }
}