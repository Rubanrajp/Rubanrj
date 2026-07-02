import Particles from "@tsparticles/react";

function ParticlesBackground() {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#050816",
                    },
                },
            }}
        />
    );
}

export default ParticlesBackground;