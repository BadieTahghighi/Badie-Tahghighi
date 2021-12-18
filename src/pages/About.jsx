

export default function About() {

    return (
        <div className="my-40">
            <p className="text-7xl">
                A little bit about me and how I became the designer I am today
            </p>
            <div className="flex flex-row flex-wrap mt-40">
                <div className="w-1/2 my-4">
                    <div className="mx-4">
                        <h6 className="text-4xl font-semibold mb-8">What I can do for you</h6>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            <br />
                            <br />
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 my-4">
                    <div className="mx-4">
                        <h6 className="text-4xl font-semibold mb-8">How I usually work</h6>
                        <p className="text-gray-400">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 my-4">
                    <div className="mx-4">
                        <h6 className="text-4xl font-semibold mb-8">Skills</h6>
                        <p className="text-gray-400">
                            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        </p>
                        <br />
                        <ul className="text-gray-400">
                            <li>&bull;Nullam felis eu pede mollis pretium.</li>
                            <li>&bull;Integer tincidunt. Cras dapibusc onsectetuer adipiscing eli.</li>
                            <li>&bull;Vivamus elementum semper nisi.</li>
                            <li>&bull;Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor.</li>
                        </ul>
                        <br />
                        <p className="text-gray-400">
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 my-4">
                    <div className="mx-4 flex flex-col mt-4 font-semibold">
                        <span className="text-4xl font-semibold mb-8" />
                        <span className="mt-6">LOGO DESIGN</span>
                        <input type="range" value={100} />
                        <span className="mt-6">BRAND DESIGN</span>
                        <input type="range" value={100} />
                        <span className="mt-6">WEB DESIGN</span>
                        <input type="range" value={90} />
                        <span className="mt-6">CONTENT CREATION</span>
                        <input type="range" value={80} />
                    </div>
                </div>
            </div>
        </div>
    )
}