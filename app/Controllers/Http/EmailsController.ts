// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
// import View from '@ioc:Adonis/Core/View'
// import mjml from 'mjml'

export default class EmailsController {

    public static async send(messageS: string, subject: string, to: string | undefined, from: string) {
        // const htmlV = mjml(View.render('mailer/home', {
        //   message:messageS
        // })).html
        await Mail.send((message) => {
            message
            .from(from)
            .to(to)
            .subject(subject)
            .htmlView('mailer/home', { message: messageS})
        })
        
      }

}
