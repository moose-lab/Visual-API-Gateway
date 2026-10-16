async def process(ctx, img):
    vlmrun = ctx.import_lib("vlmrun")
    
    caption = await vlmrun.image.caption(img, "Describe what this image shows in detail. Is this a medical or legal document, or something else?")
    ocr = await vlmrun.image.ocr(img)
    
    return {"caption": caption, "ocr_count": len(ocr.get("detections", [])), "ocr_sample": [d.get("content", "") for d in ocr.get("detections", [])[:5]]}