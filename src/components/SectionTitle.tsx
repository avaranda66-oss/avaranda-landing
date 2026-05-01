type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  id?: string;
};

export function SectionTitle({ eyebrow, title, id }: SectionTitleProps) {
  return (
    <div className="section-title" id={id}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>
        <span aria-hidden="true">-</span>
        {title}
        <span aria-hidden="true">-</span>
      </h2>
    </div>
  );
}

