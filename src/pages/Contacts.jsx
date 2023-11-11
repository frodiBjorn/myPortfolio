const Contacts = () => {
  return (
    <>
      <main className="section footer-section">
        <div className="eyes-container"></div>
        <div className="container ">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Samara, Russia</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79370797025">+7 (937) 079-70-25</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:fedotovsky96@gmail.com">
                  fedotovsky96@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
      <div className="gif-container">
        <div className="gif"></div>
      </div>
    </>
  );
};

export default Contacts;
