
type ProjectT = {
  title: string,
  description: string,
  thumbnail: string,
  projectURL?: string
}

function Project({title, description, thumbnail, projectURL}: ProjectT) {
  return (
    <div className="nes-container is-rounded is-dark with-title mb" style={{ marginBottom: '2rem' }}>
      <p className="title" style={{marginTop: "1rem"}}>{title}</p>
      <div className="project-content" style={{ display: 'flex', gap: '20px', alignItems: 'start', flexWrap: 'wrap' }}>
        <div className="project-thumbnail">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid white' }}
          />
        </div>

        <div className="project-details" style={{ flex: 1 }}>
          <p>{description}</p>
          <a
            href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-primary"
          >
            Voir le projet
          </a>
        </div>

      </div>
    </div>
  );
}

export default Project