import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ObjectId } from 'mongodb';

type ResponseData = {
  message: string, data
  ?: Object,
  ok: boolean
}

type Message = {
  email: string;
  name: string;
  message: string;
  id?: string | ObjectId;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

  const { method, body } = req;

  if (method !== 'POST') return;

  const { email, name, message } = body;

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    !name.trim() ||
    !message ||
    !message.trim()
  )
    return res.status(422).json({ message: 'Invalid input', ok: false });


  const newMessage: Message = {
    email,
    name,
    message
  }

  let client: MongoClient;

  try {
    client = await MongoClient.connect(process.env.MONGODB_CREDENTIALS);

  } catch (error) {
    return res.status(500).json({
      message: 'Could not connect to the database',
      ok: false
    });
  }

  const db = client.db();


  try {
    const result = await db.collection('messages').insertOne(newMessage);
    newMessage.id = result.insertedId;

  } catch (error) {
    client.close();
    return res.status(500).json({
      message: 'Could not save message',
      ok: false
    });
  }


  client.close();


  return res.status(200).json({
    message: 'Successfully stored',
    data: newMessage,
    ok: true
  });

};