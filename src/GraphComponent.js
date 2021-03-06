import React, { useRef, useEffect } from 'react';
import GraphResultsViewer from './GraphResultsViewer'

export const WOQLGraph = (props) => {
  const d3Container = useRef(null);
  const graphResult=new GraphResultsViewer(props.config, props.dataProvider);
  const height = props.config && props.config.gheight ||  800;
  const width = props.config && props.config.gwidth ||  800;
	useEffect(() => {
            if (props.dataProvider && d3Container.current) {
                graphResult.load(d3Container.current,true);
            }
        },
        /*
          useEffect has a dependency array (below). It's a list of dependency
          variables for this useEffect block. The block will run after mount
          and whenever any of these variables change. We still have to check
          if the variables are valid, but we do not have to compare old props
          to next props to decide whether to rerender.
        */
        [props.dataProvider, d3Container.current])


  return (<div className="d3-component" width={width} height={height} ref={d3Container}/>);
}

