
type Props = {
    title: string,
}

export default function Card({title} : Props) {
    return (
        <div className="flex">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/R_v8P4b17do?si=X2XtCINjJI1yN7mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <span>
                {title}
            </span>
        </div>
    )
}