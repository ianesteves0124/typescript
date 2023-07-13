enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month : Month){
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
    
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Mar));
console.log(isItSummer(10));

enum ApprovalStatus{
    draft,
    submitted,
    approved,
    rejected
};

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request.'
};

if (request.status === ApprovalStatus.rejected) {
    // send an email
    console.log(`Sending email to the applicant. . . .`);
}
else{
    console.log(`Not the same value`);
}

// == Equals Operator
// === Strictly Equals Operator