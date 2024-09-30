export default function Devices({ params }: { params: { name: string }}) {
    return (
        <h1>{params.name}</h1>
    )
}