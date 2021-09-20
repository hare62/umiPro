import React, { useState, useEffect, useMemo, useRef } from 'react';

export default () => {
	let [isChild, setChild] = useState(false);

	return (
		<div>
			<Child isChild={isChild} name="child" />
			<button onClick={() => setChild(!isChild)}>改变Child</button>
		</div>
	);
}

let Child = (props) => {
	let getRichChild = () => {
		console.log('rich child');

		return `rich ${props.name}`;
	}
  //
	let richChild = useMemo(() => {
		//执行相应的函数
		return getRichChild();
	}, [getRichChild]);


	return (
		<div>
      <p>useMome类似shouldComponentUpdate </p>
      <p>其他组件变了不会影响到本身没有数据变化的组件</p>
			isChild: {props.isChild ? 'true' : 'false'}<br />
			{richChild}
		</div>
	);
}
