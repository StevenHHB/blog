export default function LeaveMessagePage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Leave a Message
            </h1>
            <p className="mb-4">
                {`Feel free to reach out to me about a project, my projects, working with me, startups & VCs, or any other possibilities. I'm always open to interesting conversations and collaborations.`}
            </p>
            <p className="mb-4">
                {`Email me directly at `}
                <a href="mailto:huanghaobinsteven@gmail.com" className="text-blue-500 underline">
                    huanghaobinsteven@gmail.com
                </a>
                {`.`}
            </p>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Or schedule a calendly if you really want to talk to me
            </h1>
            <div className="calendly-inline-widget" data-url="https://calendly.com/stevenhhb/inquiry" style={{ minWidth: '320px', height: '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </section>
    )
}
