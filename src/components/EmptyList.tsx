import { ClipboardText } from "phosphor-react";

import styles from "./styles/EmptyList.module.css";

export function EmptyList() {
    return (
        <div className={styles.empty}>
            <ClipboardText size={84} />
            <p className={styles.emptyInfo}>
                You dont have tados uploaded
            </p>
            <p> Create todos and organize your items </p>
        </div>
    )
}
