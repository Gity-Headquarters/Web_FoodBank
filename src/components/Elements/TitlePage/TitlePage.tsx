
import './titlepage.css'

type titlePage = {
    title: string;
    subtitle?: string;
}

function TitlePage({ title, subtitle }: titlePage): JSX.Element {
    return (
        <div className="title-page py-3">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default TitlePage