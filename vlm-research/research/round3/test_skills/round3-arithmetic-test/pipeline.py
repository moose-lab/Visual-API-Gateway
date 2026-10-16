import json


async def process(ctx, left, right, marker):
    vlmrun = ctx.import_lib("vlmrun")
    result = {"marker": marker, "sum": int(left) + int(right)}
    vlmrun.io.write_file("round3-result.json", json.dumps(result, sort_keys=True))
    return result
