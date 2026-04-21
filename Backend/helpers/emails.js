import nodemailer from 'nodemailer';

// --- FUNCIÓN PARA REGISTRO ---
export const emailRegistro = async (datos) => {
    const { nombre, correo, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transport.sendMail({
        from: 'TalTech <no-reply@taltech.com>',
        to: correo,
        subject: 'Confirma tu cuenta en TalTech',
        html: `
            <div style="font-family: sans-serif; background-color: #f3f4f6; padding: 40px; color: #1f2937;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 20px; border-top: 10px solid #9BA657; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #9BA657; margin: 0; font-size: 30px;">TalTech</h1>
                        <p style="color: #6b7280; font-size: 14px; text-transform: uppercase;">Confirmación de Cuenta</p>
                    </div>
                    <p>Hola <strong>${nombre}</strong>,</p>
                    <p>¡Gracias por unirte a la red de ganaderos de TalTech! Confirma tu cuenta en el siguiente botón:</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.BACKEND_URL}:${process.env.PORT || 3000}/auth/confirmar/${token}" 
                           style="background-color: #9BA657; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: bold; display: inline-block;">
                           Confirmar Cuenta
                        </a>
                    </div>
                </div>
            </div>
        `
    });
};

// --- FUNCIÓN PARA OLVIDÉ PASSWORD ---
export const emailOlvidePassword = async (datos) => {
    const { nombre, correo, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transport.sendMail({
        from: 'TalTech <no-reply@taltech.com>',
        to: correo,
        subject: 'Restablece tu contraseña en TalTech',
        html: `
            <div style="font-family: sans-serif; background-color: #f3f4f6; padding: 40px; color: #1f2937;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 20px; border-top: 10px solid #9BA657; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #9BA657; margin: 0; font-size: 30px;">TalTech</h1>
                        <p style="color: #6b7280; font-size: 14px; text-transform: uppercase;">Recuperación de Acceso</p>
                    </div>
                    <p>Hola <strong>${nombre}</strong>,</p>
                    <p>Has solicitado restablecer tu contraseña. Haz clic en el botón para continuar:</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.BACKEND_URL}:${process.env.PORT || 3000}/auth/recuperacionPass/${token}" 
                        style="background-color: #9BA657; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: bold; display: inline-block;">
                        Restablecer Password
                        </a>
                    </div>
                </div>
            </div>
        `
    });
};