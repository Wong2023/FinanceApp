import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ModalBackdrop,
  ModalBox,
  ModalTitle,
  ExpenseForm,
  ModalRow,
  ModalActions,
  Label,
  Input,
  Select,
  Btn,
  BoxShadow,
  AddNewBox,
  Field
} from "../styles/ExpenseModalStyles";

export default function ExpenseModal({ onSave }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    facturaNumber: "",
    date: "",
    provider: "",
    cif: "",
    base: "",
    irpfPercent: "",
    irpf: "",
    ivaPercent: "",
    iva: "",
    total: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    if (location.state?.fromDashboard) {
      navigate("/dashboard");
    } else {
      navigate("/expenses");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSave) onSave(state);
    handleClose();
  };

  return (
    <ModalBackdrop>
      <ModalTitle>+ Add Expenses</ModalTitle>
      
      <BoxShadow>
        <ModalBox>
          <AddNewBox>
            {/* <Btn type="button" style={{ minWidth: 90 }}>+ Add New</Btn> */}
          </AddNewBox>

          <form onSubmit={handleSubmit} autoComplete="off">
            <ExpenseForm>
              <ModalRow>
                <Field>
                  <Label>Factura Number</Label>
                  <Input name="facturaNumber" value={state.facturaNumber} onChange={handleChange} width="100%" />
                </Field>
                <Field>
                  <Label>Date</Label>
                  <Input name="date" type="date" value={state.date} onChange={handleChange} width="100%" />
                </Field>
              </ModalRow>

              <ModalRow>
                <Field>
                  <Label>Provider</Label>
                  <Select name="provider" value={state.provider} onChange={handleChange} width="100%">
                    <option value="">Select</option>
                    <option value="Provider 1">Provider 1</option>
                    <option value="Provider 2">Provider 2</option>
                    <option value="Provider 3">Provider 3</option>
                  </Select>
                </Field>
                <Field>
                  <Label>CIF</Label>
                  <Input name="cif" value={state.cif} onChange={handleChange} width="100%" />
                </Field>
              </ModalRow>

              <ModalRow>
                <Field>
                  <Label>Base</Label>
                  <Input name="base" value={state.base} onChange={handleChange} width="100%" />
                </Field>
                <Field>
                  <div style={{ display: "flex", gap: "120px" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "70px" }}>
                      <Label>IRPF%</Label>
                      <Input name="irpfPercent" value={state.irpfPercent} onChange={handleChange} width="180px"/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "110px" }}>
                      <Label>IRPF</Label>
                      <Input name="irpf" value={state.irpf} onChange={handleChange} width="180px" />
                    </div>
                  </div>
                </Field>
              </ModalRow>

              <ModalRow>
                <Field>
                  <div style={{ display: "flex", gap: "103px" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "90px" }}>
                      <Label>IVA%</Label>
                      <Input name="ivaPercent" value={state.ivaPercent} onChange={handleChange} width="175px" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "90px" }}>
                      <Label>IVA</Label>
                      <Input name="iva" value={state.iva} onChange={handleChange} width="175px" />
                    </div>
                  </div>
                </Field>
                <Field>
                  <Label>Total</Label>
                  <Input name="total" value={state.total} onChange={handleChange} width="100%" />
                </Field>
              </ModalRow>
            </ExpenseForm>

            <ModalActions>
              <Btn type="button" onClick={handleClose}>Cancel</Btn>
              <Btn primary type="submit">Save</Btn>
            </ModalActions>
          </form>
        </ModalBox>
      </BoxShadow>
    </ModalBackdrop>
  );
}
