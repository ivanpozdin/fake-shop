function Footer() {
  return (
    <div className="bg-black text-white mt-10 p-10 grid grid-cols-1 lg:grid-cols-2 place-content-center gap-4">
      <div className="flex gap-4 flex-col lg:justify-self-end">
        <div className="max-w-96">
          <h3 className="text-xl">About</h3>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            ab quis. Minus eaque autem molestiae facere, ex nulla magni
            explicabo vel placeat, ratione animi eveniet consectetur soluta.
            Consectetur, tenetur delectus.
          </div>
        </div>
        <div className="">
          <h3 className="text-xl">Contact us!</h3>
          <p>Phone: +442382801448</p>
          <p>Email: unreal-store@snail.com</p>
          <p>Address: Bakev str 221d, Lonbon, UK</p>
        </div>
      </div>
      <div className="self-start">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518639955!2d-0.2664030560171719!3d51.52852620389741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sTower%20Bridge!5e0!3m2!1sen!2sge!4v1710657402512!5m2!1sen!2sge"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-2/3 h-64"
        />
      </div>
    </div>
  );
}
export default Footer;
