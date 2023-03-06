type FormData = {
  email: string;
  name: string;
  message?: string;
}

type Response = {
  ok: boolean;
  message?: string
}

export const sendContactData = async (contactData: FormData): Promise<Response> => {
  try {
    const resp = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: { 'Content-Type': 'application/json' }
    });

    await resp.json();

    return Promise.resolve({ ok: true })


  } catch (error: any) {
    return Promise.resolve({ ok: false, message: error.message })

  }

}