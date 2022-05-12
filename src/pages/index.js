import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Home.scss";


const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <h1>👋 Hi, I'm Dody.</h1>
      <p className="txt-large">
      I'm a Full Stack Web Developer with 4 years of experience working in Web Development. 
      Specialized in Backend Development with Laravel PHP Framework and 
      Skilled with Frontend Development too, especially with some javascript frameworks 
      like React JS and Vue JS. 
      </p>
      <p className="txt-large">For my Resume / CV, you can download from here: <br />
      <a href="https://doc-0o-1s-docs.googleusercontent.com/docs/securesc/oim8a3qnk0mgq2q2goepci17n8rtn7qr/1t1tt3ac9sha8pgkl29lkmca71gdd7sb/1652341650000/04671387353199093504/04671387353199093504/1DieKvPkJ8fJPMhaS6S9rYFdRSXwo1PyS?e=download&ax=ACxEAsZwq-6ibh2NVXjb5kGi6LBdWOvwJM4Uu7Y9he9Tmrrp6sx5cB1FHp9Y2UbOLrFhtsNp0J2DuYga-1rNBrNscV8za9iDuV4CrUKGFv_PoegkZUeBInQQqI8KuNDbSs2Ka80kIxOUr_PvpIOM6dpfK5VMMeZ-4mZLPpbf5LRjoyeW7-_lcdwXuzXabH8Vcc37c4fsiSpZNEf30P1pMgUPH4wej36UAnEaJiulfmsO7f4HNO-BWjzIGW8kbhs5WLFXtkkunM8P7pY1uYkuRfdPG6MlNMAuGu73qhG3plLskNpmo8EMIJtR-NhNqL-Q6YMEJMYTPx23pxHK0uLrvQ4Li_sYQtpCBsOnqMw5xY-9wEaKLZ-B6k1tzx1o7Yjr9XMve4MYzZ0Eq5y5_yQxCw416ebCRI8VGYlkYwsxmszi-B6owf3lMZXnAlEg_cAvjw3Zpd-uDHzCwqpH-hiy20gFcFszwB05tUcEbmTsVMIGSsyDNG2LNvwrUcf7KCBKSRbIZHtWnaSfPgTbWBVAdawTS6XFWr-EFws8EO_Pr4f-XZiU-unPoUhG-M5NzpXkvSAko_0ZMmE-xDlVvka1uy2lyZW454N52Y11eAVXn6aQKlShK5BtMYJ_Mgm2W9xU18rz2cNeQNr9lc0fjxtioBzzjLZ5Ln67RWjDUNDsZUKe4kMeuoxiIUZ34Kkxto5oCVqGLbb9q2Fhl2TfUK60Qm_U5959_HPNbitp87xPoa_ODsenKs-_Nw&authuser=0&nonce=e64gi1vuih9ke&user=04671387353199093504&hash=og9d12crb3bb3p3baasi4arsjrvk0tm8">Dody Prasetyo CV 2022.pdf</a>
      </p>
      <p className="txt-large" style={{marginBottom: '10px'}}>My other Social Media, let's get connected!:</p>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/dodycode" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="https://www.github.com/dodycode" target="_blank" rel="noreferrer">Github</a>
        <a href="https://www.facebook.com/prasdody" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com/__dodypras" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
