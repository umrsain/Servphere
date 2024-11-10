import { FinishSetup } from '@/components/email/seller/FinishSetup';
import { SellerRegistration } from '@/components/email/seller/SellerRegistration';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@servphere.com>',
      to: ['technomonkey9710@gmail.com'],
      subject: 'Welcome to Servphere',
      react: FinishSetup({clientName: "Alex Jones"}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
