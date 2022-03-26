import React from "react";

export const ColorDescription = (props) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: props.containerWidth
        }}>
            <div style=
                {{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                {props.colorArr.map((color) => (
                    <div style={{
                        width: "25px",
                        height: "25px",
                        marginBottom: "5px",
                        backgroundColor: color,
                    }} />
                ))}
            </div>
            <div style={{
                flex: "4",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {props.ageArr.map((ageElement) => (
                    <span style={{
                        height: "30px"
                    }}>{ageElement.name}</span>
                ))}
            </div>
            <div style={{
                marginLeft: "auto",
                flex: "5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {props.ageArr.map((ageElement) => (
                    <span style={{
                        height: "30px",
                        marginLeft: "auto"
                    }}>{ageElement.value}</span>
                ))}
            </div>
        </div>
    )
}