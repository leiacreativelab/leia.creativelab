export default function Section({
  title, kicker, lead, children,
}:{
  title:string; kicker?:string; lead?:string; children:React.ReactNode;
}){
  return (
    <section className="py-16">
      <div className="container">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">{title}</h2>
        {lead ? <p className="text-beige/90 max-w-3xl mt-2">{lead}</p> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
