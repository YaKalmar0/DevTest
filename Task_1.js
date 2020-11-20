//________Task_1______
function Filter(arr)
{
    var outp = [];
    arr.forEach(elem => (typeof elem == "number") ? outp.push(elem) : null);

    return outp;
}

/*
var array0 = [1, 5, 'hello', 223, true, 'world', 'nice', 2, 'to']
filtered = Filter(array0)
console.log("This is filtered array:", filtered)*/


//________Task_2_______
function first_non_repeating_letter(str)
{
    lowered = str.toLowerCase();
    for (var i=0; i<str.length; i++)
    {
        count = 0;
        for (var j=0; j<str.length; j++)
        {
            if (lowered[i] == lowered[j]){ count += 1};
        }
        if (count == 1) {return str[i];}
    }

    return null; //if all letters appear >1 times
}

/*
var test_str = 'hello wHole woRld'
outp = first_non_repeating_letter(test_str)
console.log(outp)*/


//________Task_3______
function DigitalRoot(numb)
{
    while (numb > 9)
    {
        var res = 0;
        for (var i=0; i<numb.toString().length; i++)
        {
            res += parseInt(numb.toString()[i])
        }
        numb = res;
    }
    return numb
}

/*
number = 493193
rooted = DigitalRoot(number)
console.log(rooted)*/


//_________Task_4________
function pairs_of_5(arr)
{
    var pairs = 0;
    for (var i=0; i<arr.length-1; i++)
    {
        /* 
        if (arr[i] > 5)
        {
            continue; //Uncomment in case of non negative numbers
        }*/

        for (var j=i+1; j<arr.length; j++)
        {
            console.log('first gone:', arr[i])
            if (arr[i] + arr[j] == 5)
            {
                pairs += 1;
            }
        }
    }
    return pairs;
}

/*
var arr = [1,3,6,2,2,0,4,5]
answer = pairs_of_5(arr)
console.log(answer)*/


//________Task_5______
function compare_full_names(a, b)
{
    if ((a[1] < b[1]) || (a[1] == b[1] && a[0] < b[0]))
    {
        return -1
    }
    
    if ((a[1] > b[1]) || (a[1] == b[1] && a[0] > b[0]))
    {
        return 1;
    }

    return 0;
}

function Transformation(str)
{
    str = str.toUpperCase()
    var arr_of_str = str.split(';')
    for (var i=0; i<arr_of_str.length; i++)
    {
        arr_of_str[i] = arr_of_str[i].split(':');
    } // done splitting, got array of subarrays of name and surname [[name1, sur1], [name2, sur2], ...]

    var sorted =  arr_of_str.sort(compare_full_names); //use a comparison func written before

    var output = "";
    for (var el of sorted)
    {
        output += '(' + el[1] + ', ' + el[0] + ')'
    }

    return output;
}

/*
var s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
sorted = Transformation(s)
console.log(sorted)*/


//______Extra_Task_1________
function NextBigger(val)
{
    //str_val = val.toString();
    var str_val = val.toString(10).replace(/\D/g, '0').split('').map(Number);

    for (i=str_val.length-1; i>0; i--)
    {
        for (j=i-1; j>-1; j--)
        {
            if (str_val[i] > str_val[j])
            {
                [str_val[i], str_val[j]] = [str_val[j], str_val[i]];

                var outp = '';
                str_val.forEach(element => outp += element.toString());
                return parseInt(outp);
            }
            
        }
    }

    return -1;
}

/*
var numb = 9;
res = NextBigger(numb);
console.log('res:',res)*/


//_____Extra_Task_2____
function get_dot_ip(int_ip)
{
    var bytes = [];
    bytes.push(int_ip & 0xFF);
    bytes.push((int_ip >> 8) & 0xFF);
    bytes.push((int_ip >> 16) & 0xFF);
    bytes.push((int_ip >> 24) & 0xFF);

    var str = '';
    bytes.reverse().forEach(element => str += element.toString() + '.');
    str = str.slice(0, -1);
    return str;
}

var integer_ip = 2149583361;
dot_ip = get_dot_ip(integer_ip);
console.log(dot_ip)
