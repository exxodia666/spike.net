import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
export default function ProgressComponent({ name, value, style }) {
	// let i = 0;
	// function count() {
	// 	// сделать часть крупной задачи (*)
	// 	do {
	// 		i++;
	// 	} while (i % 1e6 !== 0);
	// 	if (i < 1e7) {
	// 		setTimeout(count);
	// 	}
	// }
	// count();
	return (
		<p>
			<ProgressBar className="progress" animated label={name} striped variant={style} now={value} />
		</p>
	);
}
