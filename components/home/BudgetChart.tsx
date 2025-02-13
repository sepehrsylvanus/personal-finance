"use client";
import { budgets } from "@/constants/hub";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#626070", "#F2CDAC", "#82C9D7", "#277C78"];

interface BudgetChartState {
  activeIndex: number;
}

export default class BudgetChart extends PureComponent<{}, BudgetChartState> {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  state: BudgetChartState = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%">
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              data={budgets}
              cx="50%"
              cy="50%"
              innerRadius={70} // Decreased inner radius
              outerRadius={120} // Increased outer radius
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {budgets.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Overlay div for centered text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div className="flexCol items-center gap-100">
            <p className="preset1">$338</p>
            <p className="text-gray-500">of $975 limit</p>
          </div>
        </div>
      </div>
    );
  }
}
