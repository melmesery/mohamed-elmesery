import "../styles/Animation.css";

export default function Animation() {
    const glowingDivs = Array(4)
        .fill("")
        .map((_, index) => (
            <div key={index} className="glowing">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        ));
    return <div className="animation">{glowingDivs}</div>;
}
