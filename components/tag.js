import utilStyles from '../styles/utils.module.css'

export default function Tag({tag}){
    const split = tag.split(',');
    // console.log(split);
    const taglist = split.map((split) =>
        <span className={utilStyles.tag}>{split}</span>
    );
    return (
        <div>{taglist}</div>
    )
}