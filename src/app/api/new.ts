import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/lib/firebase"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, date } = req.body;
    if (!name || !date) {
      return res.status(400).json({ error: 'Name and date are required' });
    }

    const docRef = await addDoc(collection(db, "gestion-salles"), {
      salle: name,
      start_date: date
    });

    res.status(200).json({ id: docRef.id });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
