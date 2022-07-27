import Plot from '../../../../node_modules/react-plotly.js/react-plotly'

import './PlotGraph.css'

const PlotGraph = ({ ...arg }) => {
  return (
    <div className="graph-wrapper">
      <div className="button-sub_wrapper">
        <button className="button-sub" onClick={arg.handleSubYear}>1Y</button>
        <button className="button-sub" onClick={arg.handleSub6Month}>6M</button>
        <button className="button-sub" onClick={arg.handleSub3Month}>3M</button>
        <button className="button-sub" onClick={arg.handleSubMonth}>1M</button>
        <button className="button-sub" onClick={arg.handleSub5Days}>5D</button>
        <button className="button-sub" onClick={arg.handleSubOneDay}>1D</button>
      </div>
      <Plot
        data={[{
          type: 'scatter',
          x: arg.date,
          y: arg.symbolPrice,
          marker: { color: 'red', size: 20 },
          mode: 'lines',
          name: `${arg.inputValue}`
        }]}
        layout={{ width: 900, height: 450, title: `${arg.inputValue}/${arg.inputValuePair}` }}
      />
    </div>
  )
}

export default PlotGraph
