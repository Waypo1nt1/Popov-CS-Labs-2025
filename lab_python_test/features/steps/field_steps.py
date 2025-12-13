from behave import given, when, then
from field import field

@given('a list of goods')
def step_impl(context):
    context.goods = []
    for row in context.table:
        item = dict(row.as_dict())

        for k, v in item.items():
            if v == 'None':
                item[k] = None
            elif v.isdigit():
                item[k] = int(v)
        context.goods.append(item)

@when('I extract field "{field_name}"')
def step_impl(context, field_name):
    context.result = list(field(context.goods, field_name))

@when('I extract fields "{field1}" and "{field2}"')
def step_impl(context, field1, field2):
    context.result = list(field(context.goods, field1, field2))

@then('I get list with "{val1}", "{val2}"')
def step_impl(context, val1, val2):
    assert context.result == [val1, val2]

@then('I get a dictionary with title "{val1}" and color "{val2}"')
def step_impl(context, val1, val2):
    expected = {'title': val1, 'color': val2}
    assert context.result[0] == expected

@then('I get an empty list')
def step_impl(context):
    assert context.result == []
