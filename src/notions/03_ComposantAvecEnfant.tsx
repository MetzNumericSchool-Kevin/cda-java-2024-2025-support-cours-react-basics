export default function ComposantAvecEnfant({ children }) {
    const style = {
        border: "2px solid white",
        padding: "10px",
        maxWidth: 300,
    }

    return (
        <div style={style}>
            {/* children, contient les éléments enfants de mon composant lors de son utilisation */}
            {children}
        </div>
    )
}