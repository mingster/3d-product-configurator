import React from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { FormControl, InputLabel, Select } from "@mui/material"
import makeStyles from '@mui/styles/makeStyles';
import { setCurrentNodeData } from "../../redux/actions/NodeActions"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const NodeSelector = props => {
  const classes = useStyles()
  const { nodeStore, productStore, setCurrentNodeData } = props
  let options = productStore.productData?.nodes.map(n => {
    return (
      <option key={n.id} value={n.id}>
        {n.label}
      </option>
    )
  })

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel shrink variant="outlined" id="node-selector">
        選擇要修改的部份
      </InputLabel>
      <Select
        labelId="node-selector"
        native
        label="Select node"
        variant="outlined"
        style={{
          width: 300
        }}
        value={nodeStore.currentNodeData?.id ?? "none"}
        onChange={event => {
          if (productStore.productData) {
            if (event.target.value !== "none") {
              setCurrentNodeData(
                productStore.productData.nodes.find(
                  n => n.id === event.target.value
                )
              )
            } else {
              setCurrentNodeData(null)
            }
          } else {
            setCurrentNodeData(null)
          }
        }}
      >
        <option value="none">None</option>
        {options}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  nodeStore: state.nodeStore,
  productStore: state.productStore,
  setCurrentNodeData: PropTypes.func.isRequired
})

export default connect(mapStateToProps, { setCurrentNodeData })(NodeSelector)
