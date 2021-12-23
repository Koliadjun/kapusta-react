import React from "react";
import CategoryImagesList from "components/CategoryImages/CategoryImagesList/CategoryImagesList";
import IncomeSpendSection from '../../components/IncomeSpendSection/IncomeSpendSection'

import Container from "components/Container/Container";
import s from './ReportView.module.css'

const ReportView = () => {
    return (
        <section className={s.section}>
            <Container>
                <IncomeSpendSection />
                <CategoryImagesList/>
        </Container>
        </section>
    )
}

export default ReportView