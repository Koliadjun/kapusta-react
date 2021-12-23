function search(user) {
    return Object.keys(this).every((key) => user[key] === this[key]);
}
export const getAllTransaction = state => state.transaction.transaction

export const getAllIncomePerMonth = (month, year) => state => {
    const filter = { year, month, negative: false }
    const income = getAllTransaction(state).filter(search, filter);
    return income || [];
}
export const getAllSpendPerMonth = (month, year) => state => {
    const filter = { year, month, negative: true }
    const spend = getAllTransaction(state).filter(search, filter)
    return spend || [];
}
export const getAllSpendSummary = year => state => {
    const filter = { year, negative: true }
    const spend = getAllTransaction(state).filter(search, filter)
    const result = []
    for (let i = 0; i < 12; i++) {
        result[i] = spend.filter(element => element.month === i + 1).reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.sum), 0)
    }
    return result
}

export const getAllIncomeSummary = year => state => {
    const filter = { year, negative: false }
    const spend = getAllTransaction(state).filter(search, filter)
    const result = []
    for (let i = 0; i < 12; i++) {
        result[i] = spend.filter(element => element.month === i + 1).reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.sum), 0)
    }
    return result
}

export const getIncomeSummaryPerMonth = (month, year) => state => {
    const income = getAllIncomeSummary(year)
    return income(state)[month - 1];
}

export const getSpendSummaryPerMonth = (month, year) => state => {
    const spend = getAllSpendSummary(year)
    return spend(state)[month - 1];
}

export const getCurrentMonth = state => {
    const date = state.transaction.date
    return date.getMonth() + 1;
}

export const getCurrentYear = state => {
    const date = state.transaction.date
    return date.getFullYear();

}

export const getCurrentDay = state => {
    const date = state.transaction.date
    return date.getDate()
}

export const getIncomeReportDataPerMonth = (month, year) => state => {
    const filter = { month, year, negative: false }
    const income = getAllTransaction(state).filter(search, filter)
    const a = income.reduce((object, item) => {
        var category = item.category;
        var amount = parseInt(item.sum);
        if (!object.hasOwnProperty(category)) {
            object[category] = 0;
        }

        object[category] += amount;
        return object;
    }, {});
    return a

}
export const getSpendReportDataPerMonth = (month, year) => state => {
    const filter = { month, year, negative: true }
    const income = getAllTransaction(state).filter(search, filter)
    const a = income.reduce((object, item) => {
        var category = item.category;
        var amount = parseInt(item.sum);
        if (!object.hasOwnProperty(category)) {
            object[category] = 0;
        }

        object[category] += amount;
        return object;
    }, {});
    const result = []
    for (const key in a) {
        result.push({ category: key, value: a[key] })
    }
    return result

}

