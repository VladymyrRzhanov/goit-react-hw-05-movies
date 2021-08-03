import s from "./Section.module.css";

const Section = ({children}) => (
    <section className={s.section}>
        {children}
    </section>
);

export default Section;